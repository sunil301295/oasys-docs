const sidebars = {
  whitepaper: [
    {
      type: 'autogenerated',
      dirName: 'whitepaper',
    },
  ],
  architecture: [
    {
      type: 'category',
      label: 'Overview', 
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'OASYS Architecture', 
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'architecture/overview/oasys-architecture/1-1-ecosystem-per-chain',
            // 'architecture/overview/oasys-architecture/1-2-oasys-rollup',
            'architecture/overview/oasys-architecture/1-3-flexible-token-design',
          ]
        }, {
          type: 'category',
          label: 'Permissioned Chain', 
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'architecture/overview/permissioned-chain/1-1-high-qualiry-database',
            // 'architecture/overview/permissioned-chain/1-2-efficient-load',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Hub Layer', 
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Hub Layer', 
          link: {
            type: 'doc',
            id: 'architecture/hub-layer/hub-layer',
          },
          collapsed: true,
          items: []
        },
        {
          type: 'category',
          label: 'Consensus Algorithm', 
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'DPoS', 
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'architecture/hub-layer/consensus/dpos/1-1-hub-consensus',
                'architecture/hub-layer/consensus/dpos/1-2-weighted-random',
                // 'architecture/hub-layer/consensus/dpos/1-2-mining',
              ]
            }, {
              type: 'category',
              label: 'Incentive Logic', 
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'architecture/hub-layer/consensus/incentive/1-1-validator-staker',
                'architecture/hub-layer/consensus/incentive/1-2-reward-commission',
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'About Validator Account', 
          link: {
            type: 'doc',
            id: 'architecture/hub-layer/validator-account',
          },
          collapsed: true,
          items: []
        },
        {
          type: 'category',
          label: 'Wallet', 
          link: {
            type: 'doc',
            id: 'architecture/hub-layer/wallet',
          },
          collapsed: true,
          items: []
        },
        {
          type: 'category',
          label: 'Smart Contract',
          link: {
            type: 'doc',
            id: 'architecture/hub-layer/contract',
          },
          collapsed: true,
          items: []
        },
        {
          type: 'category',
          label: 'Token Flexibility', 
          link: {
            type: 'doc',
            id: 'architecture/hub-layer/ecosystem/token/1-1-ft-types',
          },
          collapsed: true,
          items: [],
        },
        {
          type: 'category',
          label: 'Token in Oasys(OAS/LOAS/SOAS/WOAS)', 
          link: {
            type: 'doc',
            id: 'architecture/hub-layer/ecosystem/token/1-4-oas-tokens',
          },
          collapsed: true,
          items: [],
        }
      ]
    },
    {
      type: 'category',
      label: 'Verse Layer', 
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Verse Layer', 
          link: {
            type: 'doc',
            id: 'architecture/verse-layer/verse-layer'
          },
          collapsed: true,
          items: []
        },
        {
          type: 'category',
          label: 'Consensus', 
          link: {
            type: 'doc',
            id: 'architecture/verse-layer/consensus'
          },
          collapsed: true,
          items: []
        },
        {
          type: 'category',
          label: 'About Verse accounts', 
          link: {
            type: 'doc',
            id: 'architecture/verse-layer/verse-accounts'
          },
          collapsed: true,
          items: []
        },
        {
          type: 'category',
          label: 'Permission', 
          link: {
            type: 'doc',
            id: 'architecture/verse-layer/permission'
          },
          collapsed: true,
          items: []
        }, {
          type: 'category',
          label: 'Oasys Rollup', 
          link: {
            type: 'doc',
            id: 'architecture/verse-layer/rollup/1-1-overview'
          },
          collapsed: true,
          items: [
            'architecture/verse-layer/rollup/1-1-overview',
            'architecture/verse-layer/rollup/1-2-difference',
            {
              type: 'category',
              label: 'Verifier', 
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'architecture/verse-layer/rollup/2-1-instant-verifier',
                'architecture/verse-layer/rollup/2-2-how-to-pay-network-fee',
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Smart Contract',
          link: {
            type: 'doc',
            id: 'architecture/verse-layer/contract'
          },
          collapsed: true,
          items: []
        }
      ]
    },
    {
      type: 'category',
      label: 'Wallet', 
      link: {
        type: 'doc',
        id: 'architecture/wallet',
      },
      collapsed: true,
      items: [],
    },
  ],
  hubvalidator: [
    {
      type: 'category',
      label: "Operate Validator", 
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'hub-validator/operate-validator/hd-requirement',
        'hub-validator/operate-validator/build-validator-node',
        'hub-validator/operate-validator/join-validator',
        'hub-validator/operate-validator/claim-commission',
        'hub-validator/operate-validator/setup-verifier',
        'hub-validator/operate-validator/monitor',
        'hub-validator/operate-validator/upgrade-migrate',
        'hub-validator/operate-validator/faq',
        'staking/rpc-endpoint/1-1-rpc-endpoint',
      ]
    },
    {
      type: 'category',
      label: "Tools", 
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'hub-validator/tools/2-1-hub-geth',
        'hub-validator/tools/2-2-oaspos',
        'hub-validator/tools/2-3-nsuite',
      ]
    },
  ],
  versedeveloper: [
    {
      type: 'category',
      label: 'Intro', 
      link: {
        type: 'doc',
        id: 'verse-developer/intro',
      },
      collapsed: true,
      items: [],
    },
    {
      type: 'category',
      label: "Build Verse", 
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'verse-developer/how-to-build-verse/requirement',
        'verse-developer/how-to-build-verse/manual',
        'verse-developer/how-to-build-verse/optional-configs',
        'verse-developer/how-to-build-verse/build-verse-submitter',
        'verse-developer/how-to-build-verse/verse-proxy',
        'verse-developer/how-to-build-verse/rate-limit',
        'verse-developer/how-to-build-verse/reduce-metamask-access',
        'verse-developer/how-to-build-verse/read-node',
        'verse-developer/how-to-build-verse/monitor',
        'verse-developer/how-to-build-verse/explorer',
        'verse-developer/how-to-build-verse/the-graph',
        'verse-developer/how-to-build-verse/upgrade-verse',
        'verse-developer/how-to-build-verse/upgrade-contract',
      ],
    },
    {
      type: 'category',
      label: "Create Token", 
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'verse-developer/handle-token/1-5-intro',
        'verse-developer/handle-token/1-1-vft',
        'verse-developer/handle-token/1-2-vnft',
        'verse-developer/handle-token/1-3-oft',
        'verse-developer/handle-token/1-4-onft',
      ],
    },
    {
      type: 'category',
      label: "Sample Game",
      link: {
        type: 'doc',
        id: 'verse-developer/game/1-1'
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: "Tutorial", 
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'verse-developer/game/tutorial/1-1',
            'verse-developer/game/tutorial/1-2',
          ],
        },
        {
          type: 'category',
          label: "Repository", 
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'verse-developer/game/repository/1-1',
            'verse-developer/game/repository/1-2',
            'verse-developer/game/repository/1-3',
            'verse-developer/game/repository/1-4',
          ],
        },
        {
          type: 'category',
          label: "Function", 
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'verse-developer/game/blockchain-functionality/1-1',
            'verse-developer/game/blockchain-functionality/1-2',
            'verse-developer/game/blockchain-functionality/1-3',
            'verse-developer/game/blockchain-functionality/1-4',
          ],
        },
        {
          type: 'category',
          label: "NFT Creation", 
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'verse-developer/game/nft-creation/1-1',
            'verse-developer/game/nft-creation/1-2',
            'verse-developer/game/nft-creation/1-3',
            'verse-developer/game/nft-creation/1-4',
            'verse-developer/game/nft-creation/1-5',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Bridge',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'verse-developer/bridge/bridge',
        'verse-developer/bridge/hub-verse',
      ],
    },
    {
      type: 'category',
      label: 'Sand Verse',
      link: {
        type: 'doc',
        id: 'verse-developer/sandverse',
      },
      collapsed: true,
      items: [],
    },
    {
      type: 'category',
      label: 'Verse Contact List',
      link: {
        type: 'doc',
        id: 'verse-developer/contact-list',
      },
      collapsed: true,
      items: [],
    },
    {
      type: 'category',
      label: 'FAQ',
      link: {
        type: 'doc',
        id: 'verse-developer/faq',
      },
      collapsed: true,
      items: [],
    },
    {
      type: 'category',
      label: 'RPC Endpoint',
      link: {
        type: 'doc',
        id: 'staking/rpc-endpoint/1-1-rpc-endpoint',
      },
      collapsed: true,
      items: [],
    },
  ],
  staking: [
    {
      type: 'category',
      label: "What's OASYS?", 
      link: {
        type: 'doc',
        id: 'tech-docs/whats-oasys/1-1-whats-oasys',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Gaming Chain', 
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'tech-docs/whats-oasys/gaming-chain/1-1-high-performance',
            'tech-docs/whats-oasys/gaming-chain/1-2-decentralizaton-and-data-availability',
          ],
        },
        {
          type: 'category',
          label: 'What We Provide?', 
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'tech-docs/whats-oasys/what-we-provide/1-1-private-as-public',
          ],
        },
        {
          type: 'category',
          label: 'Architecture', 
          link: {
            type: 'doc',
            id: 'tech-docs/whats-oasys/oasys-architecture/1-1-oasys-architecture',
          },
          collapsed: true,
          items: [
            'tech-docs/whats-oasys/oasys-architecture/1-2-original-rollup',
            'tech-docs/whats-oasys/oasys-architecture/1-3-incentive-logic',
          ],
        },
        // {
        //   type: 'category',
        //   label: 'Roadmap', 
        //   link: {
        //     type: 'doc',
        //     id: 'tech-docs/whats-oasys/roadmap/1-1-initial-functionalities',
        //   },
        //   collapsed: true,
        //   items: [],
        // }, 
      ],
    },
    {
      type: 'category',
      label: "Staking/Unstaking",
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'staking/stake-oasys/1-1-stake',
        'staking/stake-oasys/1-2-stake-hub',
        'staking/stake-oasys/1-3-stake-cli',
        'staking/stake-oasys/1-4-stake-contract',
        'staking/stake-oasys/1-5-export-csv',
      ],
    },
    {
      type: 'category',
      label: 'Setup Metamask', 
      link: {
        type: 'doc',
        id: 'staking/setup-metamask/1-1-how-to-setup',
      },
      collapsed: true,
      items: [],
    },
    {
      type: 'category',
      label: 'RPC Endpoint', 
      link: {
        type: 'doc',
        id: 'staking/rpc-endpoint/1-1-rpc-endpoint',
      },
      collapsed: true,
      items: [],
    },
    {
      type: 'category',
      label: "Blockchain Explorer",
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'staking/explore/1-1-explore',
        'staking/explore/1-2-csv-download',
        'staking/explore/1-3-verify',
      ],
    },
    {
      type: 'category',
      label: 'Official Links', 
      link: {
        type: 'doc',
        id: 'staking/official-links/1-1-official-links',
      },
      collapsed: true,
      items: [],
    },
    {
      type: 'category',
      label: 'Glossary', 
      link: {
        type: 'doc',
        id: 'staking/glossary/1-1-glossary',
      },
      collapsed: true,
      items: [],
    },
  ],
  devtools: [
    {
      type: 'autogenerated',
      dirName: 'ecosystem',
    },
  ],
};
module.exports = sidebars;