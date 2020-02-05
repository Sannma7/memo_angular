import { TestBed } from '@angular/core/testing';

import { TodoItemResolverService } from './todo-item-resolver.service';

describe('TodoItemResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoItemResolverService = TestBed.get(TodoItemResolverService);
    expect(service).toBeTruthy();
  });
});
