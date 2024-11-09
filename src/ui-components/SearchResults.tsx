import { useParams } from "react-router-dom";
import user_placeholder from "../assets/user_placeholder.png";
import no_results_placeholder from "../assets/no_results.png";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { MapPinIcon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { getUsersByQuery } from "@/services/userService";

function SearchResults() {

    const { query } = useParams();
    const [results, setResults] = useState([]);
    const [no_results, setNoResults] = useState(false);

    useEffect(() => {
        if (query && query.length > 0) {
          
            getUsersByQuery(query).then(res => {
                res.json().then(data => {
                    setResults(data.data);
                    if (data.data.length == 0) {
                        setNoResults(true);
                    }
                }).catch(err => {
                    alert("An error occurred. Please try again later.")
                })
            }).catch(err => {
                alert("An Error Occurred. Please try again later.");
            })
        }
    }, []);

    return (

        <>
            {no_results && <div style={{ display: "grid", placeItems: "center", width: "100%", height: "80vh" }}>
                <img width={300} src={no_results_placeholder} />
            </div>}

            {results.length > 0 && <div className="results_container">

                {
                    results.map(result => {
                        return <Card className="w-[350px]" color="#FFFFF" style={{ borderRadius: "16px", background: "#ffffff" }}>
                            <CardHeader>
                                <img src={user_placeholder} style={{ width: "60px", height: "60px", borderRadius: "100%" }} />
                                <CardTitle>
                                    <span style={{ fontWeight: "700" }}> {result["first_name"] + " " + result["last_name"]} </span>
                                </CardTitle>
                                <CardDescription>
                                    <div style={{ display: "flex" }}>
                                        <MapPinIcon fill="rgba(66, 87, 99, 1)" color="white" width={22} /> {result["city"]}
                                    </div>
                                </CardDescription>
                                <CardContent></CardContent>
                                <CardFooter className="flex" style={{ justifyContent: "space-between", paddingLeft: "0", marginLeft: "0" }}>
                                    <div style={{ margin: 0, padding: 0 }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <Phone fill="black" width={15} /> <span style={{ fontSize: "14px", fontWeight: "700" }}>&nbsp; {result["contact_number"]}</span>
                                        </div>
                                        <span style={{ fontSize: "11px" }}>Available on phone</span>
                                    </div>

                                    <Dialog>
                                        <DialogTrigger asChild >
                                            <button style={{ color: "#ffffff", fontSize: "15px", fontWeight: "400" }}>
                                                Fetch Details
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent style={{ background: "white" }}>
                                            <DialogHeader>
                                                <DialogTitle>Fetch Details</DialogTitle>
                                                <DialogDescription>
                                                    Here are the details of the following employee.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div>
                                                Name: {result["first_name"] + " " + result["last_name"]} <br />
                                                Location: {result["city"]} <br />
                                                Contact number: {result["contact_number"]} <br />
                                                Profile Image: <br />
                                                <img src={user_placeholder} width={240} height={240} />

                                            </div>
                                            <DialogFooter className="sm:justify-end" style={{ background: "white" }}>
                                                <DialogClose asChild>
                                                    <Button type="button" variant="secondary">
                                                        Close
                                                    </Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>

                                </CardFooter>
                            </CardHeader>
                        </Card>
                    })
                }

            </div>}

        </>

    )

}


export default SearchResults;