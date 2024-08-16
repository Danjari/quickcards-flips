import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { UnstructuredClient } from "unstructured-client";
import { PartitionResponse } from "unstructured-client/sdk/models/operations";
import { Strategy } from "unstructured-client/sdk/models/shared";

export async function POST(req) {

  //this is to get the file from the frontend
  const formData = await req.formData();
  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ success: false });
  }
  //we need to convert it to a buffer since that is what the api can work with
  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    // const path = `./files/${file.name}`
    //   await writeFile(path,buffer);
    //   return NextResponse.json({ Message: "Success", status: 201 });

    //init the unstructured client
    const key = process.env.UNSTRUCTURED_API_KEY;
    const url = process.env.UNSTRUCTURED_API_URL;
    let client = null;
    client = new UnstructuredClient({
      security: {
        apiKeyAuth: key,
      },
      serverURL: url,
    });
    //this is basically what does the ocr for us
    await client?.general
      .partition({
        partitionParameters: {
          files: {
            content: buffer, // Corrected line
            fileName: file.name,
          },
          splitPdfPage: true,
          splitPdfAllowFailed: true,
          splitPdfConcurrencyLevel: 15,
          languages: ["eng"],
        },
      })
      .then((response) => {
        if (response.statusCode === 200) {
          const jsonElements = JSON.stringify(response.elements, null, 2);
          console.log(jsonElements);
          return NextResponse.json({ message: `${jsonElements}` });
        }
      });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
}
