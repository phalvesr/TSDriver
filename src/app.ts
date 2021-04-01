import { driver } from "./Application/WebDriver/index";
import * as dotenv from "dotenv";

dotenv.config();

driver<{}>({ 
    url: "https://www.instagram.com/juliette.freire/",
    pageExecutionLambda: () => {

        const valor = document.querySelectorAll("input.gNO89b")[1] as HTMLInputElement;
        return {
            a: valor.value
        }
    }
});