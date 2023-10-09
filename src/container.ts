import { PhraseController } from './controllers';
import { GetLastPhraseService } from './services';

// Services memory cache
let getLastPhraseService: GetLastPhraseService;

// Controllers memory cache
let phraseController: PhraseController;

export const container = () => {
  getLastPhraseService = getLastPhraseService || new GetLastPhraseService();
  phraseController = phraseController || new PhraseController();

  return {
    controllers: {
      phraseController,
    },
    services: {
      getLastPhraseService,
    },
  };
};
