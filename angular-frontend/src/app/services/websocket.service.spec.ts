import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WebsocketService } from './websocket.service';

describe('Websocket Service', () => {
  let service: WebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(WebsocketService);
  });

  it('Websocket Service should work', () => {
    expect(service).toBeTruthy();
  });
});
