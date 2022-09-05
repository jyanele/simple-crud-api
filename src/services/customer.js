import db from '../db/index';
import { v4 as uuid } from 'uuid';

async function getAllCustomers() {
  await db.read();

  const { customers } = db.data;

  return customers;
}

async function getCustomer(id) {
  await db.read();

  const { customers } = db.data;

  const customer = customers.find((e) => e.id === id);

  return customer;
}

async function addCustomer(data) {
  await db.read();

  const { name, address, contactNumber } = data;

  const customerRecord = {
    uid: uuid(),
    name: name,
    address: address,
    contact: contactNumber,
  };

  const postCustomer = db.data.customers.push(customerRecord);

  await db.write();

  return postCustomer;
}

const customerDb = () =>
  Object.freeze({
    getAllCustomers,
    getCustomer,
  });

export default customerDb;
export { getAllCustomers, getCustomer, addCustomer };
