"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const teams = [
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

export function T2MGincanaPlacarBanner() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center text-center gap-2">
        <h3 className="heading-03-bold text-foreground">Gincana T2M: Placar Atual por Equipe</h3>
        <p className="body-title-light text-foreground/80 max-w-[50rem]">
          Veja o desempenho de cada equipe na arrecadação de alimentos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {teams.map((team) => (
          <Card key={team.name} className="w-full h-auto flex flex-col">
            <CardHeader>
              <div className="flex flex-col heading-04-medium" style={{ color: team.color }}>
                {team.name}
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
                    dataKey="nome_tipo"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value}
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
                  <Bar dataKey="total_quantidade_coletada" fill={team.color} radius={8}>
                    <LabelList
                      dataKey="total_quantidade_coletada"
                      position="top"
                      offset={12}
                      className="fill-foreground"
                      fontSize={12}
                      formatter={(value: number) => `${value} kg`}
                    />
                  </Bar>
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
    </div>
  );
}
