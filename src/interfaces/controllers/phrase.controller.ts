import { ControllerReply, ControllerRequest } from './controller';

export interface PhraseController {
  getLastPhrase(
    request: ControllerRequest,
    reply: ControllerReply,
  ): Promise<unknown>;
}
