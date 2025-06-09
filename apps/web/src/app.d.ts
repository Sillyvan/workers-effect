declare namespace Cloudflare {
	interface Env {
		WORKER: Service<import('../../worker/src/index').default>;
	}
}
interface Env extends Cloudflare.Env {}

declare global {
	namespace App {
		interface Locals {
		}
		interface Platform {
			env: Env;
			cf: CfProperties;
			ctx: ExecutionContext;
		}
	}
}

export {};
