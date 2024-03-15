export default function Header({title, paragraph}) {
    return (
        <header className="mb-6 sm:mb-9">
        <h1 className=" text-2xl sm:text-[2rem] mb-2 text-marineBlue font-bold sm:mb-3">
         {title} 
        </h1>
        <p className=" text-coolGray ">
          {paragraph}
        </p>
      </header>

    )
}