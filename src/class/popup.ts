// popup.ts

import { BaseNode, BaseNodeType } from './baseNode.js'

console.log("Popup file")

// BookmarkTypes

const root = new BaseNode(1, BaseNodeType.FOLDER, "root", null)

function addFolder(title: string) {
    console.log(`Add folder called with node [${title}]`)
    root.addChildFolder(title)

    // re-render updated list
    renderBookmarkList()
}

function addBookmark(title: string) {
    console.log(`Add Bookmark called with node [${title}]`)
    root.addChildBookmark(title)

    // re-render updated list
    renderBookmarkList()
}

function removeBookmarkNode(index: number) {
    console.log(`Remove bookmark called with index ${index}`)
    root.removeChild(index)

    // re-render updated list
    renderBookmarkList()
}

function editBookmarkNode(index: number) {
    console.log(`Edit bookmark called with index ${index}`)
    let size = root.children.length

    if (index >= size || index < 0) {
        console.error(`Index Out Of Bound with index: ${index} and size: ${size} `)
        return
    }

    const bookmark = root.children[index]
    if (bookmark) {
        const newName = prompt("New bookmark name")
        if (newName) {
            bookmark.title = newName

            // re-render updated list
            renderBookmarkList()
        }
    }
}

function renderBookmarkList() {
    const bookmarkList = document.getElementById("bkmList")

    if (bookmarkList) {
        // clean up bookmark list before re-rendering
        bookmarkList.innerHTML = ""
        root.children.forEach((node, index) => {
            const item = document.createElement("li")
            const itemContent = document.createElement("div")
            switch (node.nodeType) {
                case BaseNodeType.BOOKMARK:
                    itemContent.className = "bookmark-item"
                    break
                case BaseNodeType.FOLDER:
                    itemContent.className = "folder-item"
                    break
                default: console.log(`Error NodeType is invalid! ${node.nodeType}`)
            }

            // Name section
            const nameSection = document.createElement("div")
            nameSection.textContent = node.title

            // Button group (Remove,Edit)
            const buttonGroup = document.createElement("div")
            buttonGroup.className = "button-group"

            // Remove button
            const removeButton = document.createElement("button")
            removeButton.textContent = "remove"
            removeButton.onclick = () => removeBookmarkNode(index)

            // Edit button
            const editButton = document.createElement("button")
            editButton.textContent = "edit"
            editButton.onclick = () => editBookmarkNode(index)

            buttonGroup.appendChild(removeButton)
            buttonGroup.appendChild(editButton)

            itemContent.appendChild(nameSection)
            itemContent.appendChild(buttonGroup)

            item.appendChild(itemContent)

            bookmarkList.appendChild(item)
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const addBookmarkButton = document.getElementById("addButton")
    if (addBookmarkButton) {
        addBookmarkButton.addEventListener("click", () => addBookmark("bookmark"))
    }

    const addFolderButton = document.getElementById("addFolder")
    if (addFolderButton) {
        addFolderButton.addEventListener("click", () => addFolder("folder"))
    }

    // initial bookmark list render
    renderBookmarkList()
})
