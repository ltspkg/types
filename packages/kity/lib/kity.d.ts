/// <reference types="typescript" />

// Type definitions for kity
// Project: @ltspkg/kity-typings
// Definitions by: Chunsen https://github.com/zhoucs624

declare global {
  /*~ Here, declare things that go in the global namespace, or augment
   *~ existing declarations in the global namespace
   */
  namespace kity {
    /// kity 版本号
    const version: string;
  }
}

/*~ If your module exports nothing, you'll need this line. Otherwise, delete it */
export {};
