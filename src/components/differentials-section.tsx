import { Icon } from "@/assets/icons";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import type { ReactElement } from "react";

type QuestionAccordionProps = {
  question: string;
  answer: string;
};

const QuestionAccordion = ({ question, answer }: QuestionAccordionProps): ReactElement => {
  return (
    <Accordion style={{ margin: 0 }}>
      <AccordionSummary
        expandIcon={<Icon.ExpandMore />}
        sx={{
          color: "#71717a",
          fontWeight: 600,
          backgroundColor: "#e4e4e7",
        }}
      >
        {question}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          color: "#71717a",
          backgroundColor: "#e4e4e7",
        }}
      >
        {answer}
      </AccordionDetails>
    </Accordion>
  );
};

export const DifferentialsSection = (): ReactElement => {
  return (
    <section id="questions" className="flex flex-col gap-12 tablet-s:gap-6">
      <h2
        data-aos="fade-in"
        className="text-green-500 text-4xl tablet-s:text-center laptop-s:text-3xl"
      >
        Dúvidas Frequentes
      </h2>
      <div>
        <QuestionAccordion
          question="O que fazer se não sei se um material é reciclável?"
          answer="Consulte as diretrizes locais ou verifique rótulos nas embalagens. Quando em dúvida, evite
          colocar materiais duvidosos no reciclável."
        />
        <QuestionAccordion
          question="Onde posso descartar lixo eletrônico e baterias?"
          answer="Lixo eletrônico e baterias não devem ser descartados no lixo comum. Verifique se há pontos de coleta específicos, como ecopontos ou lojas que aceitam esses itens."
        />
        <QuestionAccordion
          question="Posso reciclar plásticos sujos ou com resíduos de alimentos?"
          answer="Não. Os plásticos devem estar limpos e secos para serem reciclados. Lave rapidamente as embalagens antes de descartá-las."
        />
        <QuestionAccordion
          question="O que são ecopontos e como funcionam?"
          answer="Ecopontos são locais de coleta de resíduos recicláveis e especiais, como entulho, móveis, eletrônicos e materiais perigosos. Verifique os endereços mais próximos para o descarte correto."
        />
        <QuestionAccordion
          question="Fraldas descartáveis podem ser recicladas?"
          answer="Não. Fraldas descartáveis devem ser jogadas no lixo comum devido aos materiais mistos e resíduos orgânicos."
        />
        <QuestionAccordion
          question="Qual a diferença entre lixo orgânico e reciclável?"
          answer="Lixo orgânico inclui restos de alimentos e resíduos de jardinagem, que podem ser compostados. Recicláveis são materiais como papel, vidro, metal e plástico que podem ser processados e reutilizados."
        />
        <QuestionAccordion
          question="Por que o vidro precisa ser descartado separadamente?"
          answer="O vidro é altamente reciclável, mas pode ser perigoso se quebrado. Por isso, deve ser separado e descartado em recipientes específicos para evitar acidentes."
        />
        <QuestionAccordion
          question="Como funciona a compostagem de lixo orgânico?"
          answer="A compostagem é o processo de decomposição natural de materiais orgânicos, transformando-os em adubo. Restos de alimentos e jardinagem são os mais indicados para esse processo."
        />
        <QuestionAccordion
          question="O que acontece se eu não separar corretamente o lixo?"
          answer="Se o lixo não for separado corretamente, os materiais recicláveis podem ser contaminados, dificultando sua reciclagem e aumentando o volume de lixo em aterros."
        />
        <QuestionAccordion
          question="Posso reciclar papel com gordura ou óleo?"
          answer="Não. Papéis contaminados com gordura ou óleo, como caixas de pizza, não são recicláveis e devem ser descartados no lixo comum."
        />
      </div>
    </section>
  );
};
