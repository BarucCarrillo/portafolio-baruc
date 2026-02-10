import { Route, Routes } from "react-router-dom";
import { Index } from "../views/Index/Index";

export const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Index />}/>
        </Routes>
    );
}