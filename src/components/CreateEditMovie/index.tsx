import { useState } from "react";
import UploadImage from "./UploadImage";

function CreateEditMovie() {
  const [files, setFiles] = useState([])

  return (
    <div className="movies">
      <div>Create a new movie</div>
      <div>
        <UploadImage accept=".png, .svg, .jpeg, .jpg"
          maxSize={2097152}
          files={files}
          setFiles={setFiles} />
          <div>
            <input type="text"/>
            <input type="number"/>
            <div>
              <button>
                Cancel
              </button>
              <button>
                Submit
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default CreateEditMovie;