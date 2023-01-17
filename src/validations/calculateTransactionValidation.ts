import * as yup from "yup";

const schema = yup.object().shape({
  amount: yup
    .number()
    .transform((value) => (value ? value * 100 : 0))
    .min(1000, "O valor mínimo tem que ser acima de 10 R$")
    .required("O valor da venda é obrigatório"),
  installments: yup
    .number()
    .min(1, "Mínimo de 1 parcelas")
    .max(12, "Máximo de 12 parcelas")
    .transform((value) => (value ? value : 0))
    .required("O número de parcelas é obrigatório"),
  mdr: yup
    .number()
    .transform((value) => (value ? value : undefined))
    .min(0, "O percentual deve ser positivo")
    .required("O percentual do MDR é obrigatório"),
});

export default schema;
