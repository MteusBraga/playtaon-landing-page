import { Airplay, Bike, ChevronsUp, DollarSign, Store } from "lucide-react";
export const Section1 = () => {
  return (
    <div className="min-h-screen flex flex-col flex-wrap p-5">
      <h2>Mais Vantagens para você</h2>
      <h1 className="text-2xl font-bold">
        Confira os Benefícios de ser um parceiro Play
      </h1>

      {/* Container de itens configurado para ser grid 2x2 em telas maiores */}
      <div className="h-full grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 items-center flex-1">
        <div className="bg-slate-800 rounded-lg items-center justify-center flex flex-col shadow-lg md:h-[350px]  p-5">
          <Store size={50} />
          <h1 className="text-2xl font-bold">Ideal para seu negócio</h1>
          <p>
            Ofereça serviço de delivery ao seu cliente. Entregamos qualquer
            objeto que caiba numa bag de 45L*.
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg items-center justify-center flex flex-col shadow-lg md:h-[350px] p-5">
          <DollarSign size={50} />
          <h1 className="text-2xl font-bold">Ideal para seu negócio</h1>
          <p>
            Nossas taxas são calculadas com base na distância, mais justo para
            seu cliente.
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg items-center justify-center flex flex-col shadow-lg md:h-[350px] p-5">
          <ChevronsUp size={50} />
          <h1 className="text-2xl font-bold">Ideal para seu negócio</h1>
          <p>
            Seus pedidos são entregues de forma rápida e segura, sem dores de
            cabeça.
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg items-center justify-center flex flex-col shadow-lg md:h-[350px] p-5">
          <Bike size={50} />
          <h1 className="text-2xl font-bold">Ideal para seu negócio</h1>
          <p>
            Você tem acesso a uma frota de motoboys, sob demanda. Um? Dois?
            Quantos quiser...
          </p>
        </div>
      </div>
    </div>
  );
};
