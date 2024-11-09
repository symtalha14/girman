import { SearchIcon } from "lucide-react";
import master_logo from "../assets/master_logo.png";



export default function Search() {

    function takeToResults(e: any) {

        if (e.key == "Enter") {
            if (e.target.value.length > 0) {
                let q: any = e.target.value;
                q = q.replaceAll(" ", "");
                window.location.href = "/#/search/results/" + q;
            }
        }

        return;
    }

    return (
        <div className="search_container">
            <img src={master_logo} width={"480px"} />
            <div className="search_bar">
                <SearchIcon width={18} height={18} color="rgba(113, 113, 122, 1)" />
                <input onKeyUp={(e) => takeToResults(e)} type="text" placeholder="Search" />
            </div>
        </div>
    )
}