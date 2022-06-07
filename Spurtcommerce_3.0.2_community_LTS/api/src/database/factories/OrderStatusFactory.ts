/*
 * spurtcommerce community API
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

 import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { OrderStatus } from '../../api/models/OrderStatus';
define(OrderStatus, (faker: typeof Faker, settings: { role: string }) => {
    const orderStatus = new OrderStatus();
    return orderStatus;
});
