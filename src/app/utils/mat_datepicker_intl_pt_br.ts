import { MatDatepickerIntl } from '@angular/material/datepicker';

export class MatDatepickerIntlPtBr extends MatDatepickerIntl {
  getPreviousButtonLabel(): string {
    return 'Mês anterior';
  }

  getNextButtonLabel(): string {
    return 'Próximo mês';
  }

  // Adicione outras traduções conforme necessário, como para os dias da semana, etc.
}