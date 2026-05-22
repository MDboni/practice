import { pool } from "../db/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const authLoginService = async (payload: { email: string; password: string }) => {
    const { email, password } = payload

    const user = await pool.query(`
        SELECT * FROM test_table WHERE email = $1
    `, [email]
)


if(user.rows.length === 0) {
    throw new Error("User not found")
}

  const userr = user.rows[0];
  const isPasswordMatched = await bcrypt.compare(password, userr.password);

  console.log(isPasswordMatched)

  if (!isPasswordMatched) {
    throw new Error("Invalid password");
  }


//   token genarate korte hobe

const tokenPayload = {
    id: userr.id,
    email: userr.email,
    name: userr.name
}

const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY as string, { expiresIn: '1h' })


return { token };

}
export const AuthService = {
    authLoginService    
}