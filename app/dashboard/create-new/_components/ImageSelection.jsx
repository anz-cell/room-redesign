"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";

const ImageSelection = ({ selectedImage }) => {
  const [file, setFile] = useState();

  const onFileSelected = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    selectedImage(event.target.files[0]);
  };

  return (
    <div>
      <label>Select Image of your room</label>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div
            className={`hover:shadow-lg cursor-pointer border rounded-xl border-dotted ${
              file && "p-0 bg-white"
            }`}
            style={{
              display: "inline-block",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {!file ? (
              <Image
                src={"/default.png"}
                width={300}
                height={300}
                alt="Default placeholder"
              />
            ) : (
              <img
                src={URL.createObjectURL(file)}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                alt="Uploaded image"
              />
            )}
          </div>
        </label>
        <Input
          type="file"
          accept="image/*"
          id="upload-image"
          style={{ display: "none" }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
};

export default ImageSelection;
