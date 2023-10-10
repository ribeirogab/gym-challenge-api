import { PhraseController } from './controllers';
import { PhrasesRepository } from './repositories';
import { GetLastPhraseService } from './services';

// Services memory cache
let getLastPhraseService: GetLastPhraseService;

// Controllers memory cache
let phraseController: PhraseController;

// Repositories memory cache
let phrasesRepository: PhrasesRepository;

export const container = () => {
  phrasesRepository = phrasesRepository || new PhrasesRepository();

  getLastPhraseService =
    getLastPhraseService || new GetLastPhraseService(phrasesRepository);

  phraseController =
    phraseController || new PhraseController(getLastPhraseService);

  return {
    controllers: {
      phraseController,
    },
    services: {
      getLastPhraseService,
    },
  };
};
