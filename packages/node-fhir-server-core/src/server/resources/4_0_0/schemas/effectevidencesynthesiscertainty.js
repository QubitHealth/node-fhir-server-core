/**
 * @name exports
 * @summary EffectEvidenceSynthesisCertainty Class
 */
module.exports = class EffectEvidenceSynthesisCertainty {
  constructor(opts) {
    // Create an object to store all props
    Object.defineProperty(this, '__data', { value: {} });

    // Define getters and setters as enumerable

    Object.defineProperty(this, '_id', {
      enumerable: true,
      get: () => this.__data._id,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._id = new Element(value);
      },
    });

    Object.defineProperty(this, 'id', {
      enumerable: true,
      get: () => this.__data.id,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.id = value;
      },
    });

    Object.defineProperty(this, 'extension', {
      enumerable: true,
      get: () => this.__data.extension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.extension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, 'modifierExtension', {
      enumerable: true,
      get: () => this.__data.modifierExtension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.modifierExtension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, 'rating', {
      enumerable: true,
      get: () => this.__data.rating,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.rating = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'note', {
      enumerable: true,
      get: () => this.__data.note,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Annotation = require('./annotation.js');
        this.__data.note = Array.isArray(value)
          ? value.map((v) => new Annotation(v))
          : [new Annotation(value)];
      },
    });

    Object.defineProperty(this, 'certaintySubcomponent', {
      enumerable: true,
      get: () => this.__data.certaintySubcomponent,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let EffectEvidenceSynthesisCertaintyCertaintySubcomponent = require('./effectevidencesynthesiscertaintycertaintysubcomponent.js');
        this.__data.certaintySubcomponent = Array.isArray(value)
          ? value.map((v) => new EffectEvidenceSynthesisCertaintyCertaintySubcomponent(v))
          : [new EffectEvidenceSynthesisCertaintyCertaintySubcomponent(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'EffectEvidenceSynthesisCertainty',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'EffectEvidenceSynthesisCertainty';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      rating: this.rating && this.rating.map((v) => v.toJSON()),
      note: this.note && this.note.map((v) => v.toJSON()),
      certaintySubcomponent:
        this.certaintySubcomponent && this.certaintySubcomponent.map((v) => v.toJSON()),
    };
  }
};
