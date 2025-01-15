import { useVueFlow } from '@vue-flow/core'
import { ref } from 'vue'

let id = 0

function getId() {
    return `node_${id++}`
}

const state = {
    draggedType: ref<string | null>(null),
    isDragOver: ref(false),
    isDragging: ref(false),
}

export default function useDragAndDrop() {
    const { draggedType, isDragOver, isDragging } = state
    const { addNodes, screenToFlowCoordinate } = useVueFlow()

    function onDragStart(event: DragEvent, type: string) {
        if (event.dataTransfer) {
            event.dataTransfer.setData('application/vueflow', type)
            event.dataTransfer.effectAllowed = 'move'
        }
        draggedType.value = type
        isDragging.value = true
    }

    function onDragOver(event: DragEvent) {
        event.preventDefault()
        if (draggedType.value) {
            isDragOver.value = true
            if (event.dataTransfer) {
                event.dataTransfer.dropEffect = 'move'
            }
        }
    }

    function onDragLeave() {
        isDragOver.value = false
    }

    function onDrop(event: DragEvent) {
        const type = draggedType.value
        if (type) {
            const position = screenToFlowCoordinate({
                x: event.clientX,
                y: event.clientY,
            })

            const newNode = {
                id: getId(),
                type,
                position,
                data: { label: `${type} node` },
            }

            addNodes([newNode])
        }

        isDragging.value = false
        isDragOver.value = false
        draggedType.value = null
    }

    return {
        draggedType,
        isDragOver,
        isDragging,
        onDragStart,
        onDragLeave,
        onDragOver,
        onDrop,
    }
}