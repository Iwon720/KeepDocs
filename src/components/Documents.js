import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import NewDocs from "./NewDocs";
import { Button } from "@material-tailwind/react";

function Documents() {
    const currentUser = useSelector(state => state.user.currentUser)

    // const currentDoc = useSelector(state => state.doc.currentDoc)
    // currentUser.arrayOfIds.push(currentDoc.id);

    // const notNull = useSelector(state => state.doc.notNull);
    // console.log(notNull);


    const [documents, setDocuments] = useState(currentUser.arrayOfIds);

    return (
        <div>
            <NewDocs />
            {
                documents.map((document) =>
                    <div class="bg-slate-400 w-full p-8 flex justify-center font-sans">
                        <div class="rounded bg-grey-light w-64 p-2">
                            <div class="text-sm mt-2">
                                <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                                    {document.name}
                                </div>
                                <a href="/texteditor">
                                    <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                                        <p href="/texteditor">Редактировать</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Documents
