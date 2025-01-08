import "../css/editBookmarkMenu.css";

export interface IEditBookmarkMenuProps {}

export function EditBookmarkMenu(_: IEditBookmarkMenuProps) {
  return (
    <div className="editMenu">
      <h3>Edit Bookmark</h3>
      <div>
        <span>Name</span>
        <input type="text" name="" id="" />
      </div>
      <div>
        <span>URL</span>
        <input type="text" name="" id="" />
      </div>
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
