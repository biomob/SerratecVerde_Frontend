"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CompanyReportResponse } from "@/@types/reports";
import { DepositByCompanyIdItem } from "@/@types/deposits";

const teamsMock = [
  {
    name: "Vermelho",
    color: "#d32f2f",
    total: 87.13,
    wastes: [
      { nome_tipo: "Arroz", total_quantidade_coletada: 34 },
      { nome_tipo: "Feijão", total_quantidade_coletada: 26 },
      { nome_tipo: "Fubá", total_quantidade_coletada: 3 },
      { nome_tipo: "Macarrão", total_quantidade_coletada: 2.25 },
      { nome_tipo: "Açúcar", total_quantidade_coletada: 8 },
      { nome_tipo: "Café", total_quantidade_coletada: 0.75 },
    ],
  },
  {
    name: "Rosa",
    color: "#e91e63",
    total: 74.32,
    wastes: [
      { nome_tipo: "Arroz", total_quantidade_coletada: 19 },
      { nome_tipo: "Feijão", total_quantidade_coletada: 18 },
      { nome_tipo: "Fubá", total_quantidade_coletada: 7 },
      { nome_tipo: "Macarrão", total_quantidade_coletada: 2.5 },
      { nome_tipo: "Açúcar", total_quantidade_coletada: 8 },
      { nome_tipo: "Café", total_quantidade_coletada: 1.5 },
    ],
  },
  {
    name: "Verde",
    color: "#388e3c",
    total: 133.09,
    wastes: [
      { nome_tipo: "Arroz", total_quantidade_coletada: 27 },
      { nome_tipo: "Feijão", total_quantidade_coletada: 18 },
      { nome_tipo: "Fubá", total_quantidade_coletada: 18 },
      { nome_tipo: "Macarrão", total_quantidade_coletada: 8 },
      { nome_tipo: "Açúcar", total_quantidade_coletada: 18 },
      { nome_tipo: "Café", total_quantidade_coletada: 4.5 },
    ],
  },
  {
    name: "Azul",
    color: "#1976d2",
    total: 121.98,
    wastes: [
      { nome_tipo: "Arroz", total_quantidade_coletada: 18 },
      { nome_tipo: "Feijão", total_quantidade_coletada: 23 },
      { nome_tipo: "Fubá", total_quantidade_coletada: 19 },
      { nome_tipo: "Macarrão", total_quantidade_coletada: 7.5 },
      { nome_tipo: "Açúcar", total_quantidade_coletada: 13 },
      { nome_tipo: "Café", total_quantidade_coletada: 1 },
    ],
  },
];

export function T2MGincanaPlacarBanner({ deposits }: { deposits?: DepositByCompanyIdItem[] | null }) {
  // Se houver dados, monta os times a partir dos depósitos
  let teams = teamsMock;
  if (deposits && deposits.length > 0) {
    // Agrupa por equipe
    const equipesMap = new Map<
      string,
      { name: string; color: string; wastes: Record<string, number>; total: number }
    >();
    deposits.forEach((dep) => {
      const equipeNome = dep.nome_equipe;
      // Cor padrão por nome (pode ser customizada)
      const corPadrao = equipeNome.toLowerCase().includes("verde")
        ? "#00ff40"
        : equipeNome.toLowerCase().includes("azul")
          ? "#004cff"
          : equipeNome.toLowerCase().includes("vermelh")
            ? "#ff0000"
            : equipeNome.toLowerCase().includes("rosa")
              ? "#ff00d0"
              : "#388e3c";
      if (!equipesMap.has(equipeNome)) {
        equipesMap.set(equipeNome, { name: equipeNome, color: corPadrao, wastes: {}, total: 0 });
      }
      const equipe = equipesMap.get(equipeNome)!;
      equipe.wastes[dep.nome_tipo] = (equipe.wastes[dep.nome_tipo] || 0) + Number(dep.quantidade);
      equipe.total += Number(dep.quantidade);
    });
    teams = Array.from(equipesMap.values()).map((e) => ({
      name: e.name,
      color: e.color,
      total: e.total,
      wastes: Object.entries(e.wastes).map(([nome_tipo, total_quantidade_coletada]) => ({
        nome_tipo,
        total_quantidade_coletada,
      })),
    }));
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="heading-03-bold text-foreground">Gincana T2M: Placar Atual por Equipe</h3>
        <p className="body-title-light text-foreground/80 max-w-[50rem]">
          Veja o desempenho de cada equipe na arrecadação de alimentos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 w-full">
        {teams.map((team) => (
          <Card key={team.name} className="w-full h-auto flex flex-col">
            <CardHeader>
              <div className="flex flex-col heading-04-medium" style={{ color: team.color }}>
                Equipe {team.name}
                <span className="body-paragraph text-muted-foreground">
                  Total arrecadado:{" "}
                  {team.total.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  kg
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  quantidade: { label: "Quantidade (kg)", color: team.color },
                }}
              >
                <BarChart
                  accessibilityLayer
                  data={team.wastes}
                  margin={{ top: 40, right: 10, left: 10, bottom: 10 }}
                  barCategoryGap={"20%"}
                  barSize={40}
                  width={220}
                  height={220}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey={undefined} // Remove o nome do item abaixo da barra
                    tick={false} // Remove os ticks
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const { nome_tipo, total_quantidade_coletada } = payload[0].payload;
                        return (
                          <div className="rounded bg-background p-2 shadow text-xs">
                            <span className="font-medium">{nome_tipo}</span>
                            <div>
                              {Number(total_quantidade_coletada).toLocaleString("pt-BR", {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2,
                              })}{" "}
                              kg coletados
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="total_quantidade_coletada" fill={team.color} radius={8} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 heading-04-medium" style={{ color: team.color }}>
                {team.total.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                kg
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground body-paragraph">Total arrecadado pela equipe</div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Link
        className={buttonVariants({ variant: "link" })}
        target="_blank"
        href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL!}/pt/equipes/17`}
      >
        Mais informações sobre a Gincana T2M
      </Link>
    </div>
  );
}
