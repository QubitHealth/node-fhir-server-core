/**
 * @name exports
 * @summary PractitionerRole Class
 */
module.exports = class PractitionerRole {
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

    Object.defineProperty(this, 'meta', {
      enumerable: true,
      get: () => this.__data.meta,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Meta = require('./meta.js');
        this.__data.meta = new Meta(value);
      },
    });

    Object.defineProperty(this, '_implicitRules', {
      enumerable: true,
      get: () => this.__data._implicitRules,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._implicitRules = new Element(value);
      },
    });

    Object.defineProperty(this, 'implicitRules', {
      enumerable: true,
      get: () => this.__data.implicitRules,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.implicitRules = value;
      },
    });

    Object.defineProperty(this, '_language', {
      enumerable: true,
      get: () => this.__data._language,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._language = new Element(value);
      },
    });
    // valueSetReference: http://hl7.org/fhir/ValueSet/languages
    Object.defineProperty(this, 'language', {
      enumerable: true,
      get: () => this.__data.language,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.language = value;
      },
    });

    Object.defineProperty(this, 'text', {
      enumerable: true,
      get: () => this.__data.text,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Narrative = require('./narrative.js');
        this.__data.text = new Narrative(value);
      },
    });

    Object.defineProperty(this, 'contained', {
      enumerable: true,
      get: () => this.__data.contained,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.contained = Array.isArray(value) ? value.map((v) => v) : [value];
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

    Object.defineProperty(this, 'identifier', {
      enumerable: true,
      get: () => this.__data.identifier,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Identifier = require('./identifier.js');
        this.__data.identifier = Array.isArray(value)
          ? value.map((v) => new Identifier(v))
          : [new Identifier(value)];
      },
    });

    Object.defineProperty(this, '_active', {
      enumerable: true,
      get: () => this.__data._active,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._active = new Element(value);
      },
    });

    Object.defineProperty(this, 'active', {
      enumerable: true,
      get: () => this.__data.active,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.active = value;
      },
    });

    Object.defineProperty(this, 'period', {
      enumerable: true,
      get: () => this.__data.period,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Period = require('./period.js');
        this.__data.period = new Period(value);
      },
    });

    Object.defineProperty(this, 'practitioner', {
      enumerable: true,
      get: () => this.__data.practitioner,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.practitioner = new Reference(value);
      },
    });

    Object.defineProperty(this, 'organization', {
      enumerable: true,
      get: () => this.__data.organization,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.organization = new Reference(value);
      },
    });
    // valueSetReference: http://hl7.org/fhir/ValueSet/practitioner-role
    Object.defineProperty(this, 'code', {
      enumerable: true,
      get: () => this.__data.code,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.code = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });
    // valueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
    Object.defineProperty(this, 'specialty', {
      enumerable: true,
      get: () => this.__data.specialty,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.specialty = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'location', {
      enumerable: true,
      get: () => this.__data.location,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.location = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'healthcareService', {
      enumerable: true,
      get: () => this.__data.healthcareService,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.healthcareService = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'telecom', {
      enumerable: true,
      get: () => this.__data.telecom,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let ContactPoint = require('./contactpoint.js');
        this.__data.telecom = Array.isArray(value)
          ? value.map((v) => new ContactPoint(v))
          : [new ContactPoint(value)];
      },
    });

    Object.defineProperty(this, 'availableTime', {
      enumerable: true,
      get: () => this.__data.availableTime,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let PractitionerRoleAvailableTime = require('./practitionerroleavailabletime.js');
        this.__data.availableTime = Array.isArray(value)
          ? value.map((v) => new PractitionerRoleAvailableTime(v))
          : [new PractitionerRoleAvailableTime(value)];
      },
    });

    Object.defineProperty(this, 'notAvailable', {
      enumerable: true,
      get: () => this.__data.notAvailable,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let PractitionerRoleNotAvailable = require('./practitionerrolenotavailable.js');
        this.__data.notAvailable = Array.isArray(value)
          ? value.map((v) => new PractitionerRoleNotAvailable(v))
          : [new PractitionerRoleNotAvailable(value)];
      },
    });

    Object.defineProperty(this, '_availabilityExceptions', {
      enumerable: true,
      get: () => this.__data._availabilityExceptions,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._availabilityExceptions = new Element(value);
      },
    });

    Object.defineProperty(this, 'availabilityExceptions', {
      enumerable: true,
      get: () => this.__data.availabilityExceptions,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.availabilityExceptions = value;
      },
    });

    Object.defineProperty(this, 'endpoint', {
      enumerable: true,
      get: () => this.__data.endpoint,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.endpoint = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'PractitionerRole',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'PractitionerRole';
  }

  toJSON() {
    return {
      resourceType: this.resourceType,
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      _implicitRules: this._implicitRules && this._implicitRules.toJSON(),
      implicitRules: this.implicitRules,
      _language: this._language && this._language.toJSON(),
      language: this.language,
      text: this.text && this.text.toJSON(),
      contained: this.contained,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      identifier: this.identifier && this.identifier.map((v) => v.toJSON()),
      _active: this._active && this._active.toJSON(),
      active: this.active,
      period: this.period && this.period.toJSON(),
      practitioner: this.practitioner && this.practitioner.toJSON(),
      organization: this.organization && this.organization.toJSON(),
      code: this.code && this.code.map((v) => v.toJSON()),
      specialty: this.specialty && this.specialty.map((v) => v.toJSON()),
      location: this.location && this.location.map((v) => v.toJSON()),
      healthcareService: this.healthcareService && this.healthcareService.map((v) => v.toJSON()),
      telecom: this.telecom && this.telecom.map((v) => v.toJSON()),
      availableTime: this.availableTime && this.availableTime.map((v) => v.toJSON()),
      notAvailable: this.notAvailable && this.notAvailable.map((v) => v.toJSON()),
      _availabilityExceptions:
        this._availabilityExceptions && this._availabilityExceptions.toJSON(),
      availabilityExceptions: this.availabilityExceptions,
      endpoint: this.endpoint && this.endpoint.map((v) => v.toJSON()),
    };
  }
};
