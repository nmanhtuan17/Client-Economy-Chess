

const ButtonSocial = ({bg, color, icon, text}) => {
  return (
    <div style={{backgroundColor: bg}} className="px-6 py-4 text-center btn-login-social rounded-md relative">
      <img className="h-[30px] w-[30px] img-icon bg-[#fff]" src={icon} alt="" />
      <p style={{color: color}} className="font-[500] text-15 inline">{text}</p>
    </div>
  )
}

export default ButtonSocial
