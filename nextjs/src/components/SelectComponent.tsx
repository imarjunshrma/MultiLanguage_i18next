"use client"
import languages from "@/app/[lang]/_utils";
import React from "react";
import { useRouter, usePathname, useParams } from 'next/navigation'

const SelectComponent = () => {
    const params = useParams();
    const pathName = usePathname();
    const router = useRouter();
    console.log("parms", params)
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let newPath = pathName.split("/").slice(2).join("/");
        if (newPath == "") {
            newPath = `/${e.target.value}`;
        } else {
            newPath = `/${e.target.value}/${newPath}`;
        }
        router.push(newPath)
    }
    // console.log(params)
    return (
        <select name="" id="" className="border border-1 border-black outline-none" onChange={onChange}>
            {
                languages.map((lang: string, index) => (
                    <option value={lang} key={index} selected={lang == params.lang}>{lang}</option>
                ))
            }
        </select>
    )
};

export default SelectComponent;
