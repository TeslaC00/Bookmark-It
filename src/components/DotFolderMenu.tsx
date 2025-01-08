import "../css/dotMenu.css";

function openAll() {
  // TODO: open all bookmarks in folder in new tab
  console.log("Function Called: openAll");
}

function renameFolder() {
  // TODO: open input box to rename folder name
  console.log("Function Called: renameFolder");
}

function deleteFolder() {
  // TODO: delete folder
  console.log("Function Called: deleteFolder");
}

export interface IDotFolderMenuProps {}

export function DotFolderMenu(_: IDotFolderMenuProps) {
  return (
    <div className="dotMenu">
      <ul>
        <li onClick={openAll}>Open All</li>
        <li onClick={renameFolder}>Rename</li>
        <li onClick={deleteFolder}>Delete</li>
      </ul>
    </div>
  );
}
