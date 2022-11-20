import { pubListResponse, pubSaveRequest, pubSaveResponse } from "../dto/pub.dto";

export default interface pubContracts {
  list(): Promise<pubListResponse[]>;
  save(data:pubSaveRequest): Promise<pubSaveResponse>;
}
