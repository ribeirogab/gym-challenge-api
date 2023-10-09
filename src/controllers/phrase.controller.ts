import {
  ControllerReply,
  ControllerRequest,
  PhraseController as PhraseControllerInterface,
} from '../interfaces';

export class PhraseController implements PhraseControllerInterface {
  public async getLastPhrase(
    _request: ControllerRequest,
    _reply: ControllerReply,
  ): Promise<unknown> {
    return { phrase: {} };
  }
}
