import {
  attachInstruction,
  extractInstruction,
  type Instruction,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/list-item'
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine'
import {
  draggable,
  dropTargetForElements,
  monitorForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { unrefElement } from '@vueuse/core'
import { ref, watchEffect } from 'vue'

import { onWatcherCleanup, type Ref } from 'vue'
import type { TreeItem } from '../utils/tree'
import { setCustomNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview'
import { disableNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview'

export type DraggableTreeOptions = {
  reorderBefore?: (targetId: number, sourceId: number) => void
  reorderAfter?: (targetId: number, sourceId: number) => void
  combine?: (targetId: number, sourceId: number) => void
}

export const useDraggableTree = ({
  reorderBefore,
  reorderAfter,
  combine,
}: DraggableTreeOptions) => {
  watchEffect(() => {
    const cleanup = monitorForElements({
      onDrop(args) {
        const { location, source } = args
        if (!location.current.dropTargets.length) return

        const [target] = location.current.dropTargets
        if (!target) return

        const sourceId = Number(source.data.id)
        const targetId = Number(target.data.id)
        const { operation } = extractInstruction(target.data) ?? {}

        if (operation === 'reorder-before') reorderBefore?.(targetId, sourceId)
        else if (operation === 'reorder-after')
          reorderAfter?.(targetId, sourceId)
        else if (operation === 'combine') combine?.(targetId, sourceId)
      },
    })

    onWatcherCleanup(cleanup)
  })
}

export type DraggableTreeItemOptions = {
  isExpanded: Ref<boolean>
  item: Ref<TreeItem>
}

export const useDraggableTreeItem = (
  el: Ref<HTMLElement | null>,
  { isExpanded, item }: DraggableTreeItemOptions,
) => {
  const isDragging = ref(false)
  const isDraggedOver = ref(false)
  const instruction = ref<Instruction | null>(null)
  let wasExpanded = false

  watchEffect(() => {
    const domEl = unrefElement(el)
    if (!domEl) return

    const cleanup = combine(
      draggable({
        element: domEl,
        getInitialData: () => ({ id: item.value.id }),
        onDragStart: () => {
          isDragging.value = true
          wasExpanded = isExpanded.value
          isExpanded.value = false
        },
        onDrop: () => {
          isDragging.value = false
          if (wasExpanded) isExpanded.value = true
        },
        onGenerateDragPreview({ nativeSetDragImage }) {
          disableNativeDragPreview({ nativeSetDragImage })
        },
      }),

      dropTargetForElements({
        element: domEl,
        getData: ({ input, element }) =>
          attachInstruction(
            { id: item.value.id },
            {
              input,
              element,
              operations: {
                'reorder-before': 'available',
                'reorder-after': 'available',
                combine: item.value.children ? 'available' : 'not-available',
              },
            },
          ),
        canDrop: ({ source }) => source.data.id !== item.value.id,
        onDrag: ({ self }) =>
          (instruction.value = extractInstruction(self.data)),
        onDragEnter: ({ source }) => {
          if (source.data.id === item.value.id) return
          isDraggedOver.value = true
          isExpanded.value = true
        },
        onDragLeave: () => {
          isDraggedOver.value = false
          instruction.value = null
        },
        onDrop: () => {
          isDraggedOver.value = false
          instruction.value = null
        },
        getIsSticky: () => true,
      }),
    )

    onWatcherCleanup(cleanup)
  })

  return { isDragging, isDraggedOver, instruction }
}
