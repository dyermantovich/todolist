import TextField from "@mui/material/TextField"
import { LoginInputs } from "@/features/auth/lib/schemas"
import { UseFormRegister } from "react-hook-form"

type Props = {
  url: string
  register: UseFormRegister<LoginInputs>
}

export const Captcha = ({ url, register }: Props) => {
  return (
    <>
      <img src={url} alt="Captcha" />
      <TextField type="text" label="Captcha" margin="normal" {...register("captcha")} />
    </>
  )
}
