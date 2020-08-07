import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const customerService = container.resolve(CreateCustomerService);

    const customers = await customerService.execute({ name, email });

    return response.json(customers);
  }
}
