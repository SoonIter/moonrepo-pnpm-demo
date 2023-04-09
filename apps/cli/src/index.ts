import { sdk } from '@monorepo-demo/sdk';
import { add } from '@monorepo-demo/util';

sdk();
console.log('cli', add(1, 2));
