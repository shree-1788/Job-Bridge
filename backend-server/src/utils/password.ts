import bcrypt from "bcryptjs";

export async function hashPassword(password : string)  {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        return hashedPassword;

}


export async function comaprePassword(password:string,hashedPassword : string) {
        const isMatched = await bcrypt.compare(password,hashedPassword);
        return isMatched;
}