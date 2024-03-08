import React from "react";
import styles from "./Search.moduel.css";

export default function Search() {

    return (
        <form>
            <input type="text"  placeholder="Enter a Song Title" />
            <button type="submit" > SEARCH</button> 
        </form>
    )
}