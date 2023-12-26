import React, { useEffect, useMemo, useState } from "react"
import { useDropzone } from "react-dropzone"
import "./uploadImage.scss"

const UploadImage = ({ maxSize, files, setFiles, accept, ...props }: any) => {
  const [rejectedFiles, setRejectedfiles] = useState<any[]>([])

  const {
    getRootProps,
    getInputProps,
    open,
    isDragAccept,
    isFocused,
    isDragActive,
    isDragReject,
  } = useDropzone({
    multiple: false,
    maxSize: maxSize,
    accept: accept,
    // noClick: files.length > 0 || rejectedFiles.length > 0,
    noKeyboard: true,
    // noDrag: files.length > 0 || rejectedFiles.length > 0,
    onDropAccepted: async (acceptedFiles) => {
      setFiles(acceptedFiles)
      setRejectedfiles([])
    },
    onDropRejected: (rejectedFiless) => {
      setRejectedfiles(rejectedFiless)
      setFiles([])
    },

    ...props,
  })

  const openBrowseFile = (e: any) => {
    e.stopPropagation()
    open()
  }

  const currentClass = useMemo(() => {
    if (isDragActive) {
      return "active"
    }
    if (rejectedFiles.length > 0) {
      return "error"
    }

    if (files.length > 0) {
      return "success"
    }

    return ""
  }, [isDragActive, rejectedFiles, files])

  return (
    <div className="dropbox-container">
      <div
        {...getRootProps({
          className: `dropzone ${currentClass}`,
        })}
      >
        <input {...getInputProps()} />
        {currentClass === "error" ? (
          <>
            <div className="file-wrapper">
              <i className="ph ph-file-arrow-up" />
              <p className="error-filename">{rejectedFiles[0]?.file?.name}</p>
            </div>
          </>
        ) : currentClass === "success" ? (
          <>
            <div className="file-wrapper">
              <i className="ph ph-file-arrow-up success-fileIcon" />
              <p className="success-filename">{files[0]?.name}</p>
            </div>
          </>
        ) : (
          <>
            <i className="ph ph-file-arrow-up" />
            <div className="content-wrapper">
              <p className="content">Drag and drop your file here</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default UploadImage
