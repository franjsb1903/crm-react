const TitlePage = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">{title}</h1>
      <h3 className="mt-3 text-xl">{subtitle}</h3>
    </>
  )
}

export default TitlePage
