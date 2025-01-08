// baseNode.ts
// BaseNode that represents the bookmark or folder in the extension

export enum BaseNodeType {
    FOLDER, BOOKMARK
}

export class BaseNode {
    id: number
    nodeType: BaseNodeType
    title: string
    children: BaseNode[]
    parent: BaseNode | null
    constructor(id: number, nodeType: BaseNodeType, title: string, parent: BaseNode | null) {
        this.id = id
        this.nodeType = nodeType
        this.title = title
        this.children = []
        this.parent = parent
    }

    addChildBookmark(title: string) {
        if (this.nodeType == BaseNodeType.BOOKMARK) return

        let size = this.children.length
        this.children.push(new BaseNode(size + 1, BaseNodeType.BOOKMARK, title, this))
    }

    addChildFolder(title: string) {
        if (this.nodeType == BaseNodeType.BOOKMARK) return

        let size = this.children.length
        this.children.push(new BaseNode(size + 1, BaseNodeType.FOLDER, title, this))
    }

    removeChild(childId: number) {
        this.children = this.children.filter(child => child.id != childId)
    }

}
