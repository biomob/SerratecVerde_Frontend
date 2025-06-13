import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const companyImages: { [key: string]: string } = {
  Biomob: "/img/mocked/biomob.png",
  "Orange Business Services": "/img/mocked/orange.png",
  "T2M Soluções Tecnológicas": "/img/mocked/t2m.png",
  Best2BEE: "/img/mocked/btb.png",
  Serratec: "/img/mocked/serratec.png",
};

const mockedCompanies = [
  {
    id_empresa: 1,
    nome_empresa: "Biomob",
    cnpj: "12.345.678/0001-90",
    responsavel_nome: "Ana Silva",
    responsavel_email: "ana.silva@biomob.com.br",
    telefone: "(21) 99999-1234",
    endereco: "Rua Exemplo, 123 - Rio de Janeiro - RJ",
    data_cadastro: "2025-06-10T20:00:20.262Z",
    data_atualizacao: "2025-06-11T20:00:20.262Z",
    total_equipes: "10",
    total_depositos: "1200.00",
  },
  {
    id_empresa: 2,
    nome_empresa: "Orange Business Services",
    cnpj: "98.765.432/0001-10",
    responsavel_nome: "João Santos",
    responsavel_email: "joao.santos@orange.com",
    telefone: "(21) 88888-5678",
    endereco: "Polo Serratec, Petrópolis - RJ",
    data_cadastro: "2025-06-11T20:00:20.262Z",
    data_atualizacao: "2025-06-11T20:00:20.262Z",
    total_equipes: "17",
    total_depositos: "370.45",
  },
  {
    id_empresa: 3,
    nome_empresa: "T2M Soluções Tecnológicas",
    cnpj: "11.222.333/0001-44",
    responsavel_nome: "Pedro Ferreira",
    responsavel_email: "pedro.ferreira@t2m.com.br",
    telefone: "(24) 77777-1111",
    endereco: "Rua Central, 50 - Petrópolis - RJ",
    data_cadastro: "2025-06-09T20:00:20.262Z",
    data_atualizacao: "2025-06-11T20:00:20.262Z",
    total_equipes: "5",
    total_depositos: "594.16",
  },
  {
    id_empresa: 4,
    nome_empresa: "Best2BEE",
    cnpj: "44.555.666/0001-77",
    responsavel_nome: "Mariana Costa",
    responsavel_email: "mariana.costa@best2bee.com",
    telefone: "(21) 66666-2222",
    endereco: "Avenida Principal, 789 - Niterói - RJ",
    data_cadastro: "2025-06-08T20:00:20.262Z",
    data_atualizacao: "2025-06-11T20:00:20.262Z",
    total_equipes: "8",
    total_depositos: "850.50",
  },
  {
    id_empresa: 5,
    nome_empresa: "Serratec",
    cnpj: "77.888.999/0001-00",
    responsavel_nome: "Carlos Eduardo",
    responsavel_email: "carlos.eduardo@serratec.org",
    telefone: "(24) 55555-3333",
    endereco: "Polo Serratec, Petrópolis - RJ",
    data_cadastro: "2025-06-07T20:00:20.262Z",
    data_atualizacao: "2025-06-11T20:00:20.262Z",
    total_equipes: "20",
    total_depositos: "1500.25",
  },
];

export function ParticipatingCompaniesPieChart() {
  const pieColors = [
    "#15803d", // verde escuro
    "#22c55e", // verde médio
    "#4ade80", // verde claro
    "#bbf7d0", // verde pastel
    "#a7f3d0", // verde pastel 2
  ];

  const chartData = mockedCompanies.map((company, i) => ({
    browser: company.nome_empresa,
    visitors: parseFloat(company.total_depositos),
    fill: pieColors[i % pieColors.length],
  }));

  const chartConfig: ChartConfig = Object.fromEntries(
    mockedCompanies.map((company, i) => [
      company.nome_empresa,
      { label: company.nome_empresa, color: pieColors[i % pieColors.length] },
    ])
  );

  const totalKg = mockedCompanies.reduce((acc, company) => acc + parseFloat(company.total_depositos), 0);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Distribuição de Coletas</CardTitle>
        <CardDescription>Participação de cada empresa no total coletado</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px] pb-0">
          <div style={{ position: "relative", width: 250, height: 250 }}>
            <PieChart width={250} height={250}>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                outerRadius={90}
                innerRadius={50}
                isAnimationActive={false}
              />
            </PieChart>
            {/* Total centralizado */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                pointerEvents: "none",
                width: 120,
              }}
              className="font-bold text-lg text-foreground"
            >
              {totalKg.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
              <div className="text-xs font-normal text-muted-foreground">Total (kg)</div>
            </div>
          </div>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Ranking atualizado <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">Mostrando o total de depósitos por empresa</div>
      </CardFooter>
    </Card>
  );
}

export function ParticipatingCompaniesBanner() {
  const sortedCompanies = [...mockedCompanies].sort(
    (a, b) => parseFloat(b.total_depositos) - parseFloat(a.total_depositos)
  );

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full items-center">
        <div className="col-span-12 md:col-span-8 flex flex-col gap-3 w-full">
          <div className="flex flex-col">
            <span className="heading-03-bold">Empresas que mais coletaram</span>
            <span className="body-title-light w-full">
              Confira quem está no top atualmente: As empresas que mais coletaram até o momento.
            </span>
          </div>
          {sortedCompanies.map((company, index) => (
            <div className="flex flex-col gap-2" key={company.id_empresa}>
              <div className="flex gap-4 justify-between items-center">
                <div className="flex gap-4">
                  <Image
                    src={companyImages[company.nome_empresa] || "/img/mocked/default.png"}
                    alt={company.nome_empresa}
                    width={60}
                    height={60}
                    quality={100}
                    className="rounded-full w-[3.75rem] h-[3.75rem] object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="body-callout-medium">
                      {company.nome_empresa}
                      {index === 0 && "🥇"}
                      {index === 1 && "🥈"}
                      {index === 2 && "🥉"}
                    </span>
                    <span className="body-callout-light">{company.responsavel_email}</span>
                    <span className="body-callout-light text-sm text-gray-500">{company.telefone}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="body-callout-medium">{parseFloat(company.total_depositos).toFixed(2)} kgs</span>
                  <span className="body-callout-light text-sm text-gray-500">{company.total_equipes} equipes</span>
                </div>
              </div>
              <Separator />
            </div>
          ))}
        </div>
        <div className="col-span-12 md:col-span-4 flex items-center justify-center min-h-[350px]">
          <ParticipatingCompaniesPieChart />
        </div>
      </div>
      <Link
        className={buttonVariants({ variant: "link" })}
        target="_blank"
        href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL!}/pt/empresas`}
      >
        Visualizar todas as empresas participantes
      </Link>
    </div>
  );
}
