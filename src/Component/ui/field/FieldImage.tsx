import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone";
import { BiImage } from "react-icons/bi";

type Props = {
    fileURLs : string,
    setFileURLs :React.Dispatch<React.SetStateAction<string>>
    setFile :React.Dispatch<React.SetStateAction<Blob | undefined>>
    errorFile ?:string
}

export default function FieldImage({fileURLs,setFileURLs,setFile,errorFile}: Props) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            setFile(file); 
            const newFileURL  = URL.createObjectURL(file);
            setFileURLs(newFileURL);
        }
    }, [setFile, setFileURLs]);

    const {getRootProps,getInputProps } = useDropzone({ onDrop })

  return (
    <div className="mt-4 ">
        <label className="text-lg font-semibold">Image</label>
        <div {...getRootProps()} className={`${fileURLs ? " border-(--color-primary)  " : " border-4 border-(--color-primary) "} text-sm  h-60 w-full text-center cursor-pointer flex items-center justify-center`}>
            <input {...getInputProps()}  />
            {
            fileURLs ? (
                <div className="">
                    <img src={fileURLs} alt={`Preview ${fileURLs}`} className="h-60 w-full object-cover " />
                </div>
            ):(
                <div className="flex flex-col justify-center items-center">
                <BiImage  className="text-(--color-primary) inline-block m-1 text-5xl"/>
                <span>Drag/Drog the picture here</span>
                <div>
                    <button type="button" className="text-white bg-(--color-primary) hover:btn  rounded-lg px-4 py-2 mt-2">
                        parcourir computer
                    </button>
                </div>
                </div>
                )
            }

        </div>
        { errorFile && <p className=' max-w-64 text-sm text-red-500'>{errorFile} </p>  }
    </div>
  )
}