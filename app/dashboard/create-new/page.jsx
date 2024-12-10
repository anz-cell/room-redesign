"use client";
import React, { useState } from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalReq from "./_components/AdditionalReq";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/config/firebaseConfig";
import { useUser } from "@clerk/nextjs";
import CustomLoading from "./_components/CustomLoading";
import AiOutputDialog from "../_components/AiOutputDialog";

const CreateNew = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState([]);
  const [aiOutputImage, setAiOutputImage] = useState();
  const [orgImage, setOrgImage] = useState();
  const [openOutputDialog, setOpenOutputDialog] = useState(false);

  const onHandleInputChange = (value, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
    console.log(formData);
  };

  const GenerateAiImage = async () => {
    setLoading(true);
    const rawImageUrl = await SaveRawImageToFirebase();
    const result = await axios.post("/api/redesign-room", {
      imageUrl: rawImageUrl,
      roomType: formData?.room,
      designType: formData?.designType,
      additionalReq: formData?.additionalReq,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    });
    console.log(result.data);
    setAiOutputImage(result.data.result);
    setOpenOutputDialog(true);
    setLoading(false);
  };

  const SaveRawImageToFirebase = async () => {
    const fileName = Date.now() + "_raw.png";
    const imageRef = ref(storage, "room-redesign/" + fileName);

    await uploadBytes(imageRef, formData.image).then((resp) => {
      console.log("File Uploaded..");
    });

    const downloadUrl = await getDownloadURL(imageRef);
    setOrgImage(downloadUrl);
    console.log(downloadUrl);
    return downloadUrl;
  };

  return (
    <div>
      <h2 className="font-bold text-4xl text-center">
        Experience the Magic of AI Remodelling
      </h2>
      <p className="text-center text-gray-500">
        Transform any room with a click. Select a space, choose a style, and
        watch as AI instantly reimagines your environment
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mt-10">
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
        <div>
          <RoomType
            selectedRoomType={(value) => onHandleInputChange(value, "room")}
          />

          <DesignType
            selectedDesignType={(value) =>
              onHandleInputChange(value, "designType")
            }
          />

          <AdditionalReq
            additionalRequirementInput={(value) =>
              onHandleInputChange(value, "additionalReq")
            }
          />

          <Button className="w-full mt-5" onClick={GenerateAiImage}>
            Generate
          </Button>
        </div>
      </div>
      <CustomLoading loading={loading} />
      <AiOutputDialog openDialog={openOutputDialog} 
      orgImage={orgImage}
      aiImage={aiOutputImage}
      closeDialog={() => setOpenOutputDialog(false)}/>
    </div>
  );
};

export default CreateNew;
