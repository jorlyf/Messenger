import { AttachFilesAcceptTypes, AttachFilesAcceptTypesList, getAcceptFileExtensinons, IAttachFileTypeElement } from "./index";
import { RefObject } from "react";
import FileContainer from "../../models/FileContainer";

import styles from "./AttachFiles.module.scss";
import { CancelButton } from "../Buttons";

interface IMenuProps {
    files: FileContainer[];
    removeFile: (file: FileContainer) => void;
    inputRef: RefObject<HTMLInputElement>;
}

const Menu = ({ inputRef, removeFile, files = [] }: IMenuProps) => {

    const handleUpload = (elem: IAttachFileTypeElement) => {
        inputRef!.current!.accept = getAcceptFileExtensinons(elem.type);

        inputRef?.current?.click();
    }

    return (
        <div className={styles.menu}>
            <ul className={styles.selector}>
                {AttachFilesAcceptTypesList.map((t, index) => (
                    <li key={index} onClick={() => handleUpload(t)} >
                        <img src={t.pictureUrl} alt="" />
                        <span>{t.text}</span>
                    </li>
                ))}
            </ul>
            <ul className={styles.previews}>
                {files.map((f, index) => (
                    <li key={index}>
                        {f.type === AttachFilesAcceptTypes.image && f.url.length > 0 &&
                            <img src={f.url} alt="" />
                        }
                        <CancelButton onClick={() => removeFile(f)} />
                        <span>{f.file.name}</span>
                    </li>)
                )}
            </ul>
        </div>
    )
}

export default Menu;