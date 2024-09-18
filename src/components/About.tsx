

export default function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center">
        <h2 className="relative z-50 mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Tenho alguns projetos executados em cursos/faculdade e gostaria que o próximo seja o
          seu.
        </p>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40" />
      </div>

      <div className="mx-auto mt-20 max-w-lg">
        <div className="relative w-full rounded-lg bg-blue-100 p-3 ps-100 md:h-60 md:ps-44">
          <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <p>
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Talles Lopes
              </span>
            </p>

            <table className="mt-2 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Idade:
                  </td>
                  <td>35</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Celular:
                  </td>
                  <td>
                    <a
                      href="tel:+5548988734360"
                      className="underline hover:text-blue-800"
                    >
                      +55 48 9.8873-4360
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <a
                      href="mailto:talleslopes.comercial@gmail.com"
                      className="underline hover:text-blue-800"
                    >
                      talleslopes.comercial@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>
                    <a
                      href="https://www.google.com/maps/place/Ararangu%C3%A1,+SC,+88900-000/@-28.9558909,-49.5379566,13z/data=!3m1!4b1!4m6!3m5!1s0x95222f063034e383:0x29c0b18c70b3efce!8m2!3d-28.9370964!4d-49.4840256!16zL20vMGIzeDly?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      className="underline hover:text-blue-800"
                    >
                      Ararangá- SC
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
                <img className=" absolute -left-2 -top-4 h-24 w-20 rounded -lg  bg-gray-600 bg- bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56" src="public/images/129138521.jpg" alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}
