import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ServicesSection } from "./ServicesSection";

describe("ServicesSection", () => {
  it("renderiza os serviços para pessoas e empresas", () => {
    render(<ServicesSection />);

    expect(screen.getByText("Para Pessoas")).toBeInTheDocument();
    expect(screen.getByText("Psicoterapia clínica")).toBeInTheDocument();
    expect(screen.getByText("Reabilitação cognitiva")).toBeInTheDocument();
    expect(screen.getByText("Avaliação neuropsicológica")).toBeInTheDocument();

    expect(screen.getByText("Para Empresas")).toBeInTheDocument();
    expect(
      screen.getByText("Treinamento e desenvolvimento de pessoas"),
    ).toBeInTheDocument();
    expect(screen.getByText("Recrutamento e seleção")).toBeInTheDocument();
    expect(
      screen.getByText("NR-1 - Gestão de segurança e saúde no trabalho"),
    ).toBeInTheDocument();
  });
});
