import {
  ControllerReply,
  ControllerRequest,
  GetLastPhraseService,
  PhraseController as PhraseControllerInterface,
} from '../interfaces';

export class PhraseController implements PhraseControllerInterface {
  constructor(private readonly getLastPhraseService: GetLastPhraseService) {}

  public async getLastPhrase(
    _request: ControllerRequest,
    _reply: ControllerReply,
  ): Promise<unknown> {
    const phrase = await this.getLastPhraseService.execute();

    return { phrase };
  }
}
